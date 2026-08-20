# `groundstationDataflowEndpointGroup` Submodule <a name="`groundstationDataflowEndpointGroup` Submodule" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationDataflowEndpointGroup <a name="GroundstationDataflowEndpointGroup" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup(scope: Construct, id: string, config: GroundstationDataflowEndpointGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig">GroundstationDataflowEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig">GroundstationDataflowEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails">putEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPostPassDurationSeconds">resetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPrePassDurationSeconds">resetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointDetails` <a name="putEndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails"></a>

```typescript
public putEndpointDetails(value: IResolvable | GroundstationDataflowEndpointGroupEndpointDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | GroundstationDataflowEndpointGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

---

##### `resetContactPostPassDurationSeconds` <a name="resetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPostPassDurationSeconds"></a>

```typescript
public resetContactPostPassDurationSeconds(): void
```

##### `resetContactPrePassDurationSeconds` <a name="resetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPrePassDurationSeconds"></a>

```typescript
public resetContactPrePassDurationSeconds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationDataflowEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationDataflowEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationDataflowEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId">dataflowEndpointGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList">GroundstationDataflowEndpointGroupEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList">GroundstationDataflowEndpointGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSecondsInput">contactPostPassDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSecondsInput">contactPrePassDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetailsInput">endpointDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="dataflowEndpointGroupId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

```typescript
public readonly dataflowEndpointGroupId: string;
```

- *Type:* string

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: GroundstationDataflowEndpointGroupEndpointDetailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList">GroundstationDataflowEndpointGroupEndpointDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tags"></a>

```typescript
public readonly tags: GroundstationDataflowEndpointGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList">GroundstationDataflowEndpointGroupTagsList</a>

---

##### `contactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="contactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSecondsInput"></a>

```typescript
public readonly contactPostPassDurationSecondsInput: number;
```

- *Type:* number

---

##### `contactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="contactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSecondsInput"></a>

```typescript
public readonly contactPrePassDurationSecondsInput: number;
```

- *Type:* number

---

##### `endpointDetailsInput`<sup>Optional</sup> <a name="endpointDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetailsInput"></a>

```typescript
public readonly endpointDetailsInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GroundstationDataflowEndpointGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

---

##### `contactPostPassDurationSeconds`<sup>Required</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds"></a>

```typescript
public readonly contactPostPassDurationSeconds: number;
```

- *Type:* number

---

##### `contactPrePassDurationSeconds`<sup>Required</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds"></a>

```typescript
public readonly contactPrePassDurationSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationDataflowEndpointGroupConfig <a name="GroundstationDataflowEndpointGroupConfig" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupConfig: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.endpointDetails">endpointDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>number</code> | Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>number</code> | Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: IResolvable | GroundstationDataflowEndpointGroupEndpointDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}.

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPostPassDurationSeconds"></a>

```typescript
public readonly contactPostPassDurationSeconds: number;
```

- *Type:* number

Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_post_pass_duration_seconds}

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPrePassDurationSeconds"></a>

```typescript
public readonly contactPrePassDurationSeconds: number;
```

- *Type:* number

Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_pre_pass_duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GroundstationDataflowEndpointGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}.

---

### GroundstationDataflowEndpointGroupEndpointDetails <a name="GroundstationDataflowEndpointGroupEndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetails: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.awsGroundStationAgentEndpoint">awsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | Information about AwsGroundStationAgentEndpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.securityDetails">securityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}. |

---

##### `awsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="awsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.awsGroundStationAgentEndpoint"></a>

```typescript
public readonly awsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

Information about AwsGroundStationAgentEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroup#aws_ground_station_agent_endpoint}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.endpoint"></a>

```typescript
public readonly endpoint: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}.

---

##### `securityDetails`<sup>Optional</sup> <a name="securityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.securityDetails"></a>

```typescript
public readonly securityDetails: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.agentStatus">agentStatus</a></code> | <code>string</code> | The status of AgentEndpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.auditResults">auditResults</a></code> | <code>string</code> | The results of the audit. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.egressAddress">egressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | Egress address of AgentEndpoint with an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.ingressAddress">ingressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | Ingress address of AgentEndpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |

---

##### `agentStatus`<sup>Optional</sup> <a name="agentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

The status of AgentEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#agent_status GroundstationDataflowEndpointGroup#agent_status}

---

##### `auditResults`<sup>Optional</sup> <a name="auditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.auditResults"></a>

```typescript
public readonly auditResults: string;
```

- *Type:* string

The results of the audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#audit_results GroundstationDataflowEndpointGroup#audit_results}

---

##### `egressAddress`<sup>Optional</sup> <a name="egressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.egressAddress"></a>

```typescript
public readonly egressAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

Egress address of AgentEndpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#egress_address GroundstationDataflowEndpointGroup#egress_address}

---

##### `ingressAddress`<sup>Optional</sup> <a name="ingressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.ingressAddress"></a>

```typescript
public readonly ingressAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

Ingress address of AgentEndpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#ingress_address GroundstationDataflowEndpointGroup#ingress_address}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.mtu">mtu</a></code> | <code>number</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}. |

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.mtu">mtu</a></code> | <code>number</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.name">name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port_range GroundstationDataflowEndpointGroup#port_range}

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.maximum">maximum</a></code> | <code>number</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.minimum">minimum</a></code> | <code>number</code> | A minimum value. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#maximum GroundstationDataflowEndpointGroup#maximum}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#minimum GroundstationDataflowEndpointGroup#minimum}

---

### GroundstationDataflowEndpointGroupEndpointDetailsEndpoint <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsEndpoint: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.address">address</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.mtu">mtu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.address"></a>

```typescript
public readonly address: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsEndpointAddress: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails <a name="GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupEndpointDetailsSecurityDetails: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}.

---

### GroundstationDataflowEndpointGroupTags <a name="GroundstationDataflowEndpointGroupTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupTags: groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRange` <a name="putPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange"></a>

```typescript
public putPortRange(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress">putEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress">putIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAgentStatus">resetAgentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAuditResults">resetAuditResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetEgressAddress">resetEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetIngressAddress">resetIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressAddress` <a name="putEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress"></a>

```typescript
public putEgressAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---

##### `putIngressAddress` <a name="putIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress"></a>

```typescript
public putIngressAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---

##### `resetAgentStatus` <a name="resetAgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAgentStatus"></a>

```typescript
public resetAgentStatus(): void
```

##### `resetAuditResults` <a name="resetAuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAuditResults"></a>

```typescript
public resetAuditResults(): void
```

##### `resetEgressAddress` <a name="resetEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetEgressAddress"></a>

```typescript
public resetEgressAddress(): void
```

##### `resetIngressAddress` <a name="resetIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetIngressAddress"></a>

```typescript
public resetIngressAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress">egressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress">ingressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatusInput">agentStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResultsInput">auditResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddressInput">egressAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddressInput">ingressAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults">auditResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egressAddress`<sup>Required</sup> <a name="egressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress"></a>

```typescript
public readonly egressAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a>

---

##### `ingressAddress`<sup>Required</sup> <a name="ingressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress"></a>

```typescript
public readonly ingressAddress: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a>

---

##### `agentStatusInput`<sup>Optional</sup> <a name="agentStatusInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatusInput"></a>

```typescript
public readonly agentStatusInput: string;
```

- *Type:* string

---

##### `auditResultsInput`<sup>Optional</sup> <a name="auditResultsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResultsInput"></a>

```typescript
public readonly auditResultsInput: string;
```

- *Type:* string

---

##### `egressAddressInput`<sup>Optional</sup> <a name="egressAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddressInput"></a>

```typescript
public readonly egressAddressInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---

##### `ingressAddressInput`<sup>Optional</sup> <a name="ingressAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddressInput"></a>

```typescript
public readonly ingressAddressInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `auditResults`<sup>Required</sup> <a name="auditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```typescript
public readonly auditResults: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress">putAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddress` <a name="putAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress"></a>

```typescript
public putAddress(value: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address">address</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address"></a>

```typescript
public readonly address: GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsList <a name="GroundstationDataflowEndpointGroupEndpointDetailsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get"></a>

```typescript
public get(index: number): GroundstationDataflowEndpointGroupEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>[]

---


### GroundstationDataflowEndpointGroupEndpointDetailsOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint">putAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails">putSecurityDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetAwsGroundStationAgentEndpoint">resetAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetSecurityDetails">resetSecurityDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsGroundStationAgentEndpoint` <a name="putAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint"></a>

```typescript
public putAwsGroundStationAgentEndpoint(value: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint"></a>

```typescript
public putEndpoint(value: GroundstationDataflowEndpointGroupEndpointDetailsEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---

##### `putSecurityDetails` <a name="putSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails"></a>

```typescript
public putSecurityDetails(value: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---

##### `resetAwsGroundStationAgentEndpoint` <a name="resetAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetAwsGroundStationAgentEndpoint"></a>

```typescript
public resetAwsGroundStationAgentEndpoint(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetSecurityDetails` <a name="resetSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetSecurityDetails"></a>

```typescript
public resetSecurityDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint">awsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails">securityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpointInput">awsGroundStationAgentEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpointInput">endpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetailsInput">securityDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsGroundStationAgentEndpoint`<sup>Required</sup> <a name="awsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint"></a>

```typescript
public readonly awsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a>

---

##### `securityDetails`<sup>Required</sup> <a name="securityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails"></a>

```typescript
public readonly securityDetails: GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a>

---

##### `awsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="awsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpointInput"></a>

```typescript
public readonly awsGroundStationAgentEndpointInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---

##### `securityDetailsInput`<sup>Optional</sup> <a name="securityDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetailsInput"></a>

```typescript
public readonly securityDetailsInput: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails">GroundstationDataflowEndpointGroupEndpointDetails</a>

---


### GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---


### GroundstationDataflowEndpointGroupTagsList <a name="GroundstationDataflowEndpointGroupTagsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get"></a>

```typescript
public get(index: number): GroundstationDataflowEndpointGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>[]

---


### GroundstationDataflowEndpointGroupTagsOutputReference <a name="GroundstationDataflowEndpointGroupTagsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroup } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags">GroundstationDataflowEndpointGroupTags</a>

---




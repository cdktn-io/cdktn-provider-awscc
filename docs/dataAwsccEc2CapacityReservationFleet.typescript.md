# `dataAwsccEc2CapacityReservationFleet` Submodule <a name="`dataAwsccEc2CapacityReservationFleet` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2CapacityReservationFleet <a name="DataAwsccEc2CapacityReservationFleet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation_fleet awscc_ec2_capacity_reservation_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet(scope: Construct, id: string, config: DataAwsccEc2CapacityReservationFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig">DataAwsccEc2CapacityReservationFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig">DataAwsccEc2CapacityReservationFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2CapacityReservationFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2CapacityReservationFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2CapacityReservationFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2CapacityReservationFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2CapacityReservationFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.capacityReservationFleetId">capacityReservationFleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceMatchCriteria">instanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceTypeSpecifications">instanceTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.noRemoveEndDate">noRemoveEndDate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.removeEndDate">removeEndDate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.totalTargetCapacity">totalTargetCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `capacityReservationFleetId`<sup>Required</sup> <a name="capacityReservationFleetId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.capacityReservationFleetId"></a>

```typescript
public readonly capacityReservationFleetId: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `instanceMatchCriteria`<sup>Required</sup> <a name="instanceMatchCriteria" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceMatchCriteria"></a>

```typescript
public readonly instanceMatchCriteria: string;
```

- *Type:* string

---

##### `instanceTypeSpecifications`<sup>Required</sup> <a name="instanceTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.instanceTypeSpecifications"></a>

```typescript
public readonly instanceTypeSpecifications: DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList</a>

---

##### `noRemoveEndDate`<sup>Required</sup> <a name="noRemoveEndDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.noRemoveEndDate"></a>

```typescript
public readonly noRemoveEndDate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `removeEndDate`<sup>Required</sup> <a name="removeEndDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.removeEndDate"></a>

```typescript
public readonly removeEndDate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: DataAwsccEc2CapacityReservationFleetTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsList</a>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `totalTargetCapacity`<sup>Required</sup> <a name="totalTargetCapacity" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.totalTargetCapacity"></a>

```typescript
public readonly totalTargetCapacity: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2CapacityReservationFleetConfig <a name="DataAwsccEc2CapacityReservationFleetConfig" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationFleetConfig: dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation_fleet#id DataAwsccEc2CapacityReservationFleet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications <a name="DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications: dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications = { ... }
```


### DataAwsccEc2CapacityReservationFleetTagSpecifications <a name="DataAwsccEc2CapacityReservationFleetTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationFleetTagSpecifications: dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications = { ... }
```


### DataAwsccEc2CapacityReservationFleetTagSpecificationsTags <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationFleetTagSpecificationsTags: dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList <a name="DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference <a name="DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized">ebsOptimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform">instancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instancePlatform"></a>

```typescript
public readonly instancePlatform: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications">DataAwsccEc2CapacityReservationFleetInstanceTypeSpecifications</a>

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsList <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications">DataAwsccEc2CapacityReservationFleetTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList">DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationFleetTagSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecifications">DataAwsccEc2CapacityReservationFleetTagSpecifications</a>

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference <a name="DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservationFleet } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags">DataAwsccEc2CapacityReservationFleetTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationFleetTagSpecificationsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservationFleet.DataAwsccEc2CapacityReservationFleetTagSpecificationsTags">DataAwsccEc2CapacityReservationFleetTagSpecificationsTags</a>

---




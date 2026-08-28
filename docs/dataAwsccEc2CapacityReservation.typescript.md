# `dataAwsccEc2CapacityReservation` Submodule <a name="`dataAwsccEc2CapacityReservation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2CapacityReservation <a name="DataAwsccEc2CapacityReservation" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation awscc_ec2_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation(scope: Construct, id: string, config: DataAwsccEc2CapacityReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig">DataAwsccEc2CapacityReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig">DataAwsccEc2CapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2CapacityReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2CapacityReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2CapacityReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2CapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2CapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availableInstanceCount">availableInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityAllocationSet">capacityAllocationSet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList">DataAwsccEc2CapacityReservationCapacityAllocationSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationArn">capacityReservationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationFleetId">capacityReservationFleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference">DataAwsccEc2CapacityReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.deliveryPreference">deliveryPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ebsOptimized">ebsOptimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDateType">endDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ephemeralStorage">ephemeralStorage</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceMatchCriteria">instanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instancePlatform">instancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.outPostArn">outPostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.placementGroupArn">placementGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.reservationType">reservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList">DataAwsccEc2CapacityReservationTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.totalInstanceCount">totalInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.unusedReservationBillingOwnerId">unusedReservationBillingOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availableInstanceCount`<sup>Required</sup> <a name="availableInstanceCount" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.availableInstanceCount"></a>

```typescript
public readonly availableInstanceCount: number;
```

- *Type:* number

---

##### `capacityAllocationSet`<sup>Required</sup> <a name="capacityAllocationSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityAllocationSet"></a>

```typescript
public readonly capacityAllocationSet: DataAwsccEc2CapacityReservationCapacityAllocationSetList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList">DataAwsccEc2CapacityReservationCapacityAllocationSetList</a>

---

##### `capacityReservationArn`<sup>Required</sup> <a name="capacityReservationArn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationArn"></a>

```typescript
public readonly capacityReservationArn: string;
```

- *Type:* string

---

##### `capacityReservationFleetId`<sup>Required</sup> <a name="capacityReservationFleetId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationFleetId"></a>

```typescript
public readonly capacityReservationFleetId: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `commitmentInfo`<sup>Required</sup> <a name="commitmentInfo" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.commitmentInfo"></a>

```typescript
public readonly commitmentInfo: DataAwsccEc2CapacityReservationCommitmentInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference">DataAwsccEc2CapacityReservationCommitmentInfoOutputReference</a>

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `deliveryPreference`<sup>Required</sup> <a name="deliveryPreference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.deliveryPreference"></a>

```typescript
public readonly deliveryPreference: string;
```

- *Type:* string

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endDateType`<sup>Required</sup> <a name="endDateType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.endDateType"></a>

```typescript
public readonly endDateType: string;
```

- *Type:* string

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceMatchCriteria`<sup>Required</sup> <a name="instanceMatchCriteria" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceMatchCriteria"></a>

```typescript
public readonly instanceMatchCriteria: string;
```

- *Type:* string

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instancePlatform"></a>

```typescript
public readonly instancePlatform: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `outPostArn`<sup>Required</sup> <a name="outPostArn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.outPostArn"></a>

```typescript
public readonly outPostArn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `placementGroupArn`<sup>Required</sup> <a name="placementGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.placementGroupArn"></a>

```typescript
public readonly placementGroupArn: string;
```

- *Type:* string

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.reservationType"></a>

```typescript
public readonly reservationType: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: DataAwsccEc2CapacityReservationTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList">DataAwsccEc2CapacityReservationTagSpecificationsList</a>

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `totalInstanceCount`<sup>Required</sup> <a name="totalInstanceCount" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.totalInstanceCount"></a>

```typescript
public readonly totalInstanceCount: number;
```

- *Type:* number

---

##### `unusedReservationBillingOwnerId`<sup>Required</sup> <a name="unusedReservationBillingOwnerId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.unusedReservationBillingOwnerId"></a>

```typescript
public readonly unusedReservationBillingOwnerId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2CapacityReservationCapacityAllocationSet <a name="DataAwsccEc2CapacityReservationCapacityAllocationSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationCapacityAllocationSet: dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet = { ... }
```


### DataAwsccEc2CapacityReservationCommitmentInfo <a name="DataAwsccEc2CapacityReservationCommitmentInfo" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationCommitmentInfo: dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo = { ... }
```


### DataAwsccEc2CapacityReservationConfig <a name="DataAwsccEc2CapacityReservationConfig" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationConfig: dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_reservation#id DataAwsccEc2CapacityReservation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2CapacityReservationTagSpecifications <a name="DataAwsccEc2CapacityReservationTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationTagSpecifications: dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications = { ... }
```


### DataAwsccEc2CapacityReservationTagSpecificationsTags <a name="DataAwsccEc2CapacityReservationTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityReservationTagSpecificationsTags: dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2CapacityReservationCapacityAllocationSetList <a name="DataAwsccEc2CapacityReservationCapacityAllocationSetList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference <a name="DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType">allocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet">DataAwsccEc2CapacityReservationCapacityAllocationSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationType`<sup>Required</sup> <a name="allocationType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.allocationType"></a>

```typescript
public readonly allocationType: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationCapacityAllocationSet;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCapacityAllocationSet">DataAwsccEc2CapacityReservationCapacityAllocationSet</a>

---


### DataAwsccEc2CapacityReservationCommitmentInfoOutputReference <a name="DataAwsccEc2CapacityReservationCommitmentInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate">commitmentEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount">committedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo">DataAwsccEc2CapacityReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitmentEndDate`<sup>Required</sup> <a name="commitmentEndDate" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```typescript
public readonly commitmentEndDate: string;
```

- *Type:* string

---

##### `committedInstanceCount`<sup>Required</sup> <a name="committedInstanceCount" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```typescript
public readonly committedInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationCommitmentInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationCommitmentInfo">DataAwsccEc2CapacityReservationCommitmentInfo</a>

---


### DataAwsccEc2CapacityReservationTagSpecificationsList <a name="DataAwsccEc2CapacityReservationTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityReservationTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationTagSpecificationsOutputReference <a name="DataAwsccEc2CapacityReservationTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList">DataAwsccEc2CapacityReservationTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications">DataAwsccEc2CapacityReservationTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2CapacityReservationTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList">DataAwsccEc2CapacityReservationTagSpecificationsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationTagSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecifications">DataAwsccEc2CapacityReservationTagSpecifications</a>

---


### DataAwsccEc2CapacityReservationTagSpecificationsTagsList <a name="DataAwsccEc2CapacityReservationTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference <a name="DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags">DataAwsccEc2CapacityReservationTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityReservationTagSpecificationsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityReservation.DataAwsccEc2CapacityReservationTagSpecificationsTags">DataAwsccEc2CapacityReservationTagSpecificationsTags</a>

---




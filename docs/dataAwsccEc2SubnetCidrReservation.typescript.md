# `dataAwsccEc2SubnetCidrReservation` Submodule <a name="`dataAwsccEc2SubnetCidrReservation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2SubnetCidrReservation <a name="DataAwsccEc2SubnetCidrReservation" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/ec2_subnet_cidr_reservation awscc_ec2_subnet_cidr_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation(scope: Construct, id: string, config: DataAwsccEc2SubnetCidrReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig">DataAwsccEc2SubnetCidrReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig">DataAwsccEc2SubnetCidrReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2SubnetCidrReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isConstruct"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformElement"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2SubnetCidrReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2SubnetCidrReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2SubnetCidrReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/ec2_subnet_cidr_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2SubnetCidrReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.reservationType">reservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.subnetCidrReservationId">subnetCidrReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList">DataAwsccEc2SubnetCidrReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.reservationType"></a>

```typescript
public readonly reservationType: string;
```

- *Type:* string

---

##### `subnetCidrReservationId`<sup>Required</sup> <a name="subnetCidrReservationId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.subnetCidrReservationId"></a>

```typescript
public readonly subnetCidrReservationId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2SubnetCidrReservationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList">DataAwsccEc2SubnetCidrReservationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2SubnetCidrReservationConfig <a name="DataAwsccEc2SubnetCidrReservationConfig" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.Initializer"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2SubnetCidrReservationConfig: dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/ec2_subnet_cidr_reservation#id DataAwsccEc2SubnetCidrReservation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2SubnetCidrReservationTags <a name="DataAwsccEc2SubnetCidrReservationTags" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTags.Initializer"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

const dataAwsccEc2SubnetCidrReservationTags: dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2SubnetCidrReservationTagsList <a name="DataAwsccEc2SubnetCidrReservationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2SubnetCidrReservationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2SubnetCidrReservationTagsOutputReference <a name="DataAwsccEc2SubnetCidrReservationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2SubnetCidrReservation } from '@cdktn/provider-awscc'

new dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTags">DataAwsccEc2SubnetCidrReservationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2SubnetCidrReservationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2SubnetCidrReservation.DataAwsccEc2SubnetCidrReservationTags">DataAwsccEc2SubnetCidrReservationTags</a>

---




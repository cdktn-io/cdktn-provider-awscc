# `dataAwsccEc2TransitGatewayMeteringPolicyEntry` Submodule <a name="`dataAwsccEc2TransitGatewayMeteringPolicyEntry` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayMeteringPolicyEntry <a name="DataAwsccEc2TransitGatewayMeteringPolicyEntry" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry awscc_ec2_transit_gateway_metering_policy_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig">DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig">DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isConstruct"></a>

```typescript
import { dataAwsccEc2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformElement"></a>

```typescript
import { dataAwsccEc2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayMeteringPolicyEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayMeteringPolicyEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayMeteringPolicyEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId">destinationTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType">destinationTransitGatewayAttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.meteredAccount">meteredAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber">policyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock">sourceCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId">sourceTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType">sourceTransitGatewayAttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId">transitGatewayMeteringPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt">updateEffectiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationCidrBlock"></a>

```typescript
public readonly destinationCidrBlock: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentId`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentId"></a>

```typescript
public readonly destinationTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `destinationTransitGatewayAttachmentType`<sup>Required</sup> <a name="destinationTransitGatewayAttachmentType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.destinationTransitGatewayAttachmentType"></a>

```typescript
public readonly destinationTransitGatewayAttachmentType: string;
```

- *Type:* string

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.meteredAccount"></a>

```typescript
public readonly meteredAccount: string;
```

- *Type:* string

---

##### `policyRuleNumber`<sup>Required</sup> <a name="policyRuleNumber" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.policyRuleNumber"></a>

```typescript
public readonly policyRuleNumber: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceCidrBlock`<sup>Required</sup> <a name="sourceCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourceCidrBlock"></a>

```typescript
public readonly sourceCidrBlock: string;
```

- *Type:* string

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentId`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentId"></a>

```typescript
public readonly sourceTransitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `sourceTransitGatewayAttachmentType`<sup>Required</sup> <a name="sourceTransitGatewayAttachmentType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.sourceTransitGatewayAttachmentType"></a>

```typescript
public readonly sourceTransitGatewayAttachmentType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `transitGatewayMeteringPolicyId`<sup>Required</sup> <a name="transitGatewayMeteringPolicyId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.transitGatewayMeteringPolicyId"></a>

```typescript
public readonly transitGatewayMeteringPolicyId: string;
```

- *Type:* string

---

##### `updateEffectiveAt`<sup>Required</sup> <a name="updateEffectiveAt" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.updateEffectiveAt"></a>

```typescript
public readonly updateEffectiveAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig <a name="DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayMeteringPolicyEntry } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayMeteringPolicyEntryConfig: dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayMeteringPolicyEntry.DataAwsccEc2TransitGatewayMeteringPolicyEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_transit_gateway_metering_policy_entry#id DataAwsccEc2TransitGatewayMeteringPolicyEntry#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




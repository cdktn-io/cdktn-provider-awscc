# `dataAwsccEc2TransitGatewayPolicyTable` Submodule <a name="`dataAwsccEc2TransitGatewayPolicyTable` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayPolicyTable <a name="DataAwsccEc2TransitGatewayPolicyTable" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table awscc_ec2_transit_gateway_policy_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayPolicyTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig">DataAwsccEc2TransitGatewayPolicyTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig">DataAwsccEc2TransitGatewayPolicyTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayPolicyTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayPolicyTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayPolicyTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList">DataAwsccEc2TransitGatewayPolicyTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayPolicyTableId">transitGatewayPolicyTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2TransitGatewayPolicyTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList">DataAwsccEc2TransitGatewayPolicyTableTagsList</a>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayPolicyTableId`<sup>Required</sup> <a name="transitGatewayPolicyTableId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayPolicyTableId"></a>

```typescript
public readonly transitGatewayPolicyTableId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayPolicyTableConfig <a name="DataAwsccEc2TransitGatewayPolicyTableConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayPolicyTableConfig: dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table#id DataAwsccEc2TransitGatewayPolicyTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayPolicyTableTags <a name="DataAwsccEc2TransitGatewayPolicyTableTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayPolicyTableTags: dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayPolicyTableTagsList <a name="DataAwsccEc2TransitGatewayPolicyTableTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference <a name="DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPolicyTable } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags">DataAwsccEc2TransitGatewayPolicyTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TransitGatewayPolicyTableTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags">DataAwsccEc2TransitGatewayPolicyTableTags</a>

---




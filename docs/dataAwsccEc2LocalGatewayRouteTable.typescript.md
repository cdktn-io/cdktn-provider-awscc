# `dataAwsccEc2LocalGatewayRouteTable` Submodule <a name="`dataAwsccEc2LocalGatewayRouteTable` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayRouteTable <a name="DataAwsccEc2LocalGatewayRouteTable" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_local_gateway_route_table awscc_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig">DataAwsccEc2LocalGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig">DataAwsccEc2LocalGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isConstruct"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformElement"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2LocalGatewayRouteTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2LocalGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_local_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.localGatewayRouteTableArn">localGatewayRouteTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList">DataAwsccEc2LocalGatewayRouteTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableArn`<sup>Required</sup> <a name="localGatewayRouteTableArn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.localGatewayRouteTableArn"></a>

```typescript
public readonly localGatewayRouteTableArn: string;
```

- *Type:* string

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2LocalGatewayRouteTableTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList">DataAwsccEc2LocalGatewayRouteTableTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayRouteTableConfig <a name="DataAwsccEc2LocalGatewayRouteTableConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

const dataAwsccEc2LocalGatewayRouteTableConfig: dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_local_gateway_route_table#id DataAwsccEc2LocalGatewayRouteTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayRouteTableTags <a name="DataAwsccEc2LocalGatewayRouteTableTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTags.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

const dataAwsccEc2LocalGatewayRouteTableTags: dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayRouteTableTagsList <a name="DataAwsccEc2LocalGatewayRouteTableTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LocalGatewayRouteTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LocalGatewayRouteTableTagsOutputReference <a name="DataAwsccEc2LocalGatewayRouteTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTable } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTags">DataAwsccEc2LocalGatewayRouteTableTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LocalGatewayRouteTableTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTable.DataAwsccEc2LocalGatewayRouteTableTags">DataAwsccEc2LocalGatewayRouteTableTags</a>

---




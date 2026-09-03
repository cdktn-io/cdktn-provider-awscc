# `dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation` Submodule <a name="`dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association awscc_ec2_local_gateway_route_table_virtual_interface_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableArn">localGatewayRouteTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableVirtualInterfaceGroupAssociationId">localGatewayRouteTableVirtualInterfaceGroupAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableArn`<sup>Required</sup> <a name="localGatewayRouteTableArn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableArn"></a>

```typescript
public readonly localGatewayRouteTableArn: string;
```

- *Type:* string

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableVirtualInterfaceGroupAssociationId`<sup>Required</sup> <a name="localGatewayRouteTableVirtualInterfaceGroupAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayRouteTableVirtualInterfaceGroupAssociationId"></a>

```typescript
public readonly localGatewayRouteTableVirtualInterfaceGroupAssociationId: string;
```

- *Type:* string

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.localGatewayVirtualInterfaceGroupId"></a>

```typescript
public readonly localGatewayVirtualInterfaceGroupId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig: dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/ec2_local_gateway_route_table_virtual_interface_group_association#id DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags: dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference <a name="DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociation.DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags">DataAwsccEc2LocalGatewayRouteTableVirtualInterfaceGroupAssociationTags</a>

---




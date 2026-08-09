# `dataAwsccEc2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`dataAwsccEc2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LocalGatewayRouteTableVpcAssociation <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociation" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_local_gateway_route_table_vpc_association awscc_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation(scope: Construct, id: string, config: DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig">DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig">DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2LocalGatewayRouteTableVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2LocalGatewayRouteTableVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_local_gateway_route_table_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LocalGatewayRouteTableVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">localGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">localGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId">localGatewayRouteTableVpcAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```typescript
public readonly localGatewayId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableId`<sup>Required</sup> <a name="localGatewayRouteTableId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```typescript
public readonly localGatewayRouteTableId: string;
```

- *Type:* string

---

##### `localGatewayRouteTableVpcAssociationId`<sup>Required</sup> <a name="localGatewayRouteTableVpcAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId"></a>

```typescript
public readonly localGatewayRouteTableVpcAssociationId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig: dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_local_gateway_route_table_vpc_association#id DataAwsccEc2LocalGatewayRouteTableVpcAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2LocalGatewayRouteTableVpcAssociationTags: dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference <a name="DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LocalGatewayRouteTableVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LocalGatewayRouteTableVpcAssociation.DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags">DataAwsccEc2LocalGatewayRouteTableVpcAssociationTags</a>

---




# `dataAwsccEc2TransitGatewayNetworkFunctionAttachment` Submodule <a name="`dataAwsccEc2TransitGatewayNetworkFunctionAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayNetworkFunctionAttachment <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachment" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment awscc_ec2_transit_gateway_network_function_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayNetworkFunctionAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayNetworkFunctionAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayNetworkFunctionAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayNetworkFunctionAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds">availabilityZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilityZoneIds`<sup>Required</sup> <a name="availabilityZoneIds" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZoneIds"></a>

```typescript
public readonly availabilityZoneIds: string[];
```

- *Type:* string[]

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig: dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_transit_gateway_network_function_attachment#id DataAwsccEc2TransitGatewayNetworkFunctionAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags: dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference <a name="DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayNetworkFunctionAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayNetworkFunctionAttachment.DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags">DataAwsccEc2TransitGatewayNetworkFunctionAttachmentTags</a>

---




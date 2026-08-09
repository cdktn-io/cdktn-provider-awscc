# `dataAwsccEc2TransitGatewayPeeringAttachment` Submodule <a name="`dataAwsccEc2TransitGatewayPeeringAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayPeeringAttachment <a name="DataAwsccEc2TransitGatewayPeeringAttachment" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_transit_gateway_peering_attachment awscc_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayPeeringAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig">DataAwsccEc2TransitGatewayPeeringAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig">DataAwsccEc2TransitGatewayPeeringAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayPeeringAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerAccountId">peerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.status">status</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference">DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList">DataAwsccEc2TransitGatewayPeeringAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```typescript
public readonly peerAccountId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```typescript
public readonly peerTransitGatewayId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.status"></a>

```typescript
public readonly status: DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference">DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2TransitGatewayPeeringAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList">DataAwsccEc2TransitGatewayPeeringAttachmentTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayPeeringAttachmentConfig <a name="DataAwsccEc2TransitGatewayPeeringAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayPeeringAttachmentConfig: dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsccEc2TransitGatewayPeeringAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayPeeringAttachmentStatus <a name="DataAwsccEc2TransitGatewayPeeringAttachmentStatus" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayPeeringAttachmentStatus: dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus = { ... }
```


### DataAwsccEc2TransitGatewayPeeringAttachmentTags <a name="DataAwsccEc2TransitGatewayPeeringAttachmentTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayPeeringAttachmentTags: dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference <a name="DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus">DataAwsccEc2TransitGatewayPeeringAttachmentStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TransitGatewayPeeringAttachmentStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentStatus">DataAwsccEc2TransitGatewayPeeringAttachmentStatus</a>

---


### DataAwsccEc2TransitGatewayPeeringAttachmentTagsList <a name="DataAwsccEc2TransitGatewayPeeringAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference <a name="DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayPeeringAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags">DataAwsccEc2TransitGatewayPeeringAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TransitGatewayPeeringAttachmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPeeringAttachment.DataAwsccEc2TransitGatewayPeeringAttachmentTags">DataAwsccEc2TransitGatewayPeeringAttachmentTags</a>

---




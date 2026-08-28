# `dataAwsccEc2TransitGatewayVpcAttachment` Submodule <a name="`dataAwsccEc2TransitGatewayVpcAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayVpcAttachment <a name="DataAwsccEc2TransitGatewayVpcAttachment" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_vpc_attachment awscc_ec2_transit_gateway_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayVpcAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig">DataAwsccEc2TransitGatewayVpcAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig">DataAwsccEc2TransitGatewayVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isConstruct"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformElement"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2TransitGatewayVpcAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2TransitGatewayVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.addSubnetIds">addSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference">DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.removeSubnetIds">removeSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList">DataAwsccEc2TransitGatewayVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.transitGatewayVpcAttachmentId">transitGatewayVpcAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addSubnetIds`<sup>Required</sup> <a name="addSubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.addSubnetIds"></a>

```typescript
public readonly addSubnetIds: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.options"></a>

```typescript
public readonly options: DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference">DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference</a>

---

##### `removeSubnetIds`<sup>Required</sup> <a name="removeSubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.removeSubnetIds"></a>

```typescript
public readonly removeSubnetIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2TransitGatewayVpcAttachmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList">DataAwsccEc2TransitGatewayVpcAttachmentTagsList</a>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayVpcAttachmentId`<sup>Required</sup> <a name="transitGatewayVpcAttachmentId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.transitGatewayVpcAttachmentId"></a>

```typescript
public readonly transitGatewayVpcAttachmentId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayVpcAttachmentConfig <a name="DataAwsccEc2TransitGatewayVpcAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayVpcAttachmentConfig: dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_transit_gateway_vpc_attachment#id DataAwsccEc2TransitGatewayVpcAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayVpcAttachmentOptions <a name="DataAwsccEc2TransitGatewayVpcAttachmentOptions" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptions.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayVpcAttachmentOptions: dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptions = { ... }
```


### DataAwsccEc2TransitGatewayVpcAttachmentTags <a name="DataAwsccEc2TransitGatewayVpcAttachmentTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTags.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

const dataAwsccEc2TransitGatewayVpcAttachmentTags: dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference <a name="DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupport">applianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupport">dnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6Support">ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">securityGroupReferencingSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptions">DataAwsccEc2TransitGatewayVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applianceModeSupport`<sup>Required</sup> <a name="applianceModeSupport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```typescript
public readonly applianceModeSupport: string;
```

- *Type:* string

---

##### `dnsSupport`<sup>Required</sup> <a name="dnsSupport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```typescript
public readonly dnsSupport: string;
```

- *Type:* string

---

##### `ipv6Support`<sup>Required</sup> <a name="ipv6Support" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```typescript
public readonly ipv6Support: string;
```

- *Type:* string

---

##### `securityGroupReferencingSupport`<sup>Required</sup> <a name="securityGroupReferencingSupport" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```typescript
public readonly securityGroupReferencingSupport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TransitGatewayVpcAttachmentOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentOptions">DataAwsccEc2TransitGatewayVpcAttachmentOptions</a>

---


### DataAwsccEc2TransitGatewayVpcAttachmentTagsList <a name="DataAwsccEc2TransitGatewayVpcAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference <a name="DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2TransitGatewayVpcAttachment } from '@cdktn/provider-awscc'

new dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTags">DataAwsccEc2TransitGatewayVpcAttachmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2TransitGatewayVpcAttachmentTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayVpcAttachment.DataAwsccEc2TransitGatewayVpcAttachmentTags">DataAwsccEc2TransitGatewayVpcAttachmentTags</a>

---



